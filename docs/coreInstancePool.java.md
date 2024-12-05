# `coreInstancePool` Submodule <a name="`coreInstancePool` Submodule" id="rhizo-co-terraform-provider-oci.coreInstancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstancePool <a name="CoreInstancePool" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool oci_core_instance_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePool;

CoreInstancePool.Builder.create(Construct scope, java.lang.String id)
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
    .instanceConfigurationId(java.lang.String)
    .placementConfigurations(IResolvable)
    .placementConfigurations(java.util.List<CoreInstancePoolPlacementConfigurations>)
    .size(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceDisplayNameFormatter(java.lang.String)
//  .instanceHostnameFormatter(java.lang.String)
//  .loadBalancers(IResolvable)
//  .loadBalancers(java.util.List<CoreInstancePoolLoadBalancers>)
//  .state(java.lang.String)
//  .timeouts(CoreInstancePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#compartment_id CoreInstancePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_configuration_id CoreInstancePool#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.placementConfigurations">placementConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>></code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#size CoreInstancePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#defined_tags CoreInstancePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#freeform_tags CoreInstancePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#id CoreInstancePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceDisplayNameFormatter">instanceDisplayNameFormatter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_display_name_formatter CoreInstancePool#instance_display_name_formatter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceHostnameFormatter">instanceHostnameFormatter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_hostname_formatter CoreInstancePool#instance_hostname_formatter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.loadBalancers">loadBalancers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>></code> | load_balancers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#state CoreInstancePool#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#compartment_id CoreInstancePool#compartment_id}.

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_configuration_id CoreInstancePool#instance_configuration_id}.

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.placementConfigurations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>>

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#placement_configurations CoreInstancePool#placement_configurations}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#size CoreInstancePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#defined_tags CoreInstancePool#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#freeform_tags CoreInstancePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#id CoreInstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDisplayNameFormatter`<sup>Optional</sup> <a name="instanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceDisplayNameFormatter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_display_name_formatter CoreInstancePool#instance_display_name_formatter}.

---

##### `instanceHostnameFormatter`<sup>Optional</sup> <a name="instanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.instanceHostnameFormatter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_hostname_formatter CoreInstancePool#instance_hostname_formatter}.

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.loadBalancers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>>

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#load_balancers CoreInstancePool#load_balancers}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#state CoreInstancePool#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#timeouts CoreInstancePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putLoadBalancers">putLoadBalancers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putPlacementConfigurations">putPlacementConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetInstanceDisplayNameFormatter">resetInstanceDisplayNameFormatter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetInstanceHostnameFormatter">resetInstanceHostnameFormatter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoadBalancers` <a name="putLoadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putLoadBalancers"></a>

```java
public void putLoadBalancers(IResolvable OR java.util.List<CoreInstancePoolLoadBalancers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putLoadBalancers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>>

---

##### `putPlacementConfigurations` <a name="putPlacementConfigurations" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putPlacementConfigurations"></a>

```java
public void putPlacementConfigurations(IResolvable OR java.util.List<CoreInstancePoolPlacementConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putPlacementConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putTimeouts"></a>

```java
public void putTimeouts(CoreInstancePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceDisplayNameFormatter` <a name="resetInstanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetInstanceDisplayNameFormatter"></a>

```java
public void resetInstanceDisplayNameFormatter()
```

##### `resetInstanceHostnameFormatter` <a name="resetInstanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetInstanceHostnameFormatter"></a>

```java
public void resetInstanceHostnameFormatter()
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetLoadBalancers"></a>

```java
public void resetLoadBalancers()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePool;

CoreInstancePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePool;

CoreInstancePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePool;

CoreInstancePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePool;

CoreInstancePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreInstancePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreInstancePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreInstancePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreInstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.actualSize">actualSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.loadBalancers">loadBalancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList">CoreInstancePoolLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList">CoreInstancePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference">CoreInstancePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceConfigurationIdInput">instanceConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceDisplayNameFormatterInput">instanceDisplayNameFormatterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceHostnameFormatterInput">instanceHostnameFormatterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.loadBalancersInput">loadBalancersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.placementConfigurationsInput">placementConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceDisplayNameFormatter">instanceDisplayNameFormatter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceHostnameFormatter">instanceHostnameFormatter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actualSize`<sup>Required</sup> <a name="actualSize" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.actualSize"></a>

```java
public java.lang.Number getActualSize();
```

- *Type:* java.lang.Number

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.loadBalancers"></a>

```java
public CoreInstancePoolLoadBalancersList getLoadBalancers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList">CoreInstancePoolLoadBalancersList</a>

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.placementConfigurations"></a>

```java
public CoreInstancePoolPlacementConfigurationsList getPlacementConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList">CoreInstancePoolPlacementConfigurationsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeouts"></a>

```java
public CoreInstancePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference">CoreInstancePoolTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationIdInput`<sup>Optional</sup> <a name="instanceConfigurationIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceConfigurationIdInput"></a>

```java
public java.lang.String getInstanceConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNameFormatterInput`<sup>Optional</sup> <a name="instanceDisplayNameFormatterInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceDisplayNameFormatterInput"></a>

```java
public java.lang.String getInstanceDisplayNameFormatterInput();
```

- *Type:* java.lang.String

---

##### `instanceHostnameFormatterInput`<sup>Optional</sup> <a name="instanceHostnameFormatterInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceHostnameFormatterInput"></a>

```java
public java.lang.String getInstanceHostnameFormatterInput();
```

- *Type:* java.lang.String

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.loadBalancersInput"></a>

```java
public java.lang.Object getLoadBalancersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>>

---

##### `placementConfigurationsInput`<sup>Optional</sup> <a name="placementConfigurationsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.placementConfigurationsInput"></a>

```java
public java.lang.Object getPlacementConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNameFormatter`<sup>Required</sup> <a name="instanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceDisplayNameFormatter"></a>

```java
public java.lang.String getInstanceDisplayNameFormatter();
```

- *Type:* java.lang.String

---

##### `instanceHostnameFormatter`<sup>Required</sup> <a name="instanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.instanceHostnameFormatter"></a>

```java
public java.lang.String getInstanceHostnameFormatter();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstancePoolConfig <a name="CoreInstancePoolConfig" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolConfig;

CoreInstancePoolConfig.builder()
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
    .instanceConfigurationId(java.lang.String)
    .placementConfigurations(IResolvable)
    .placementConfigurations(java.util.List<CoreInstancePoolPlacementConfigurations>)
    .size(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceDisplayNameFormatter(java.lang.String)
//  .instanceHostnameFormatter(java.lang.String)
//  .loadBalancers(IResolvable)
//  .loadBalancers(java.util.List<CoreInstancePoolLoadBalancers>)
//  .state(java.lang.String)
//  .timeouts(CoreInstancePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#compartment_id CoreInstancePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_configuration_id CoreInstancePool#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.placementConfigurations">placementConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>></code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#size CoreInstancePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#defined_tags CoreInstancePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#freeform_tags CoreInstancePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#id CoreInstancePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceDisplayNameFormatter">instanceDisplayNameFormatter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_display_name_formatter CoreInstancePool#instance_display_name_formatter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceHostnameFormatter">instanceHostnameFormatter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_hostname_formatter CoreInstancePool#instance_hostname_formatter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.loadBalancers">loadBalancers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>></code> | load_balancers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#state CoreInstancePool#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#compartment_id CoreInstancePool#compartment_id}.

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_configuration_id CoreInstancePool#instance_configuration_id}.

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.placementConfigurations"></a>

```java
public java.lang.Object getPlacementConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>>

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#placement_configurations CoreInstancePool#placement_configurations}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#size CoreInstancePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#defined_tags CoreInstancePool#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#freeform_tags CoreInstancePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#id CoreInstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDisplayNameFormatter`<sup>Optional</sup> <a name="instanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceDisplayNameFormatter"></a>

```java
public java.lang.String getInstanceDisplayNameFormatter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_display_name_formatter CoreInstancePool#instance_display_name_formatter}.

---

##### `instanceHostnameFormatter`<sup>Optional</sup> <a name="instanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.instanceHostnameFormatter"></a>

```java
public java.lang.String getInstanceHostnameFormatter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#instance_hostname_formatter CoreInstancePool#instance_hostname_formatter}.

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.loadBalancers"></a>

```java
public java.lang.Object getLoadBalancers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>>

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#load_balancers CoreInstancePool#load_balancers}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#state CoreInstancePool#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolConfig.property.timeouts"></a>

```java
public CoreInstancePoolTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#timeouts CoreInstancePool#timeouts}

---

### CoreInstancePoolLoadBalancers <a name="CoreInstancePoolLoadBalancers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolLoadBalancers;

CoreInstancePoolLoadBalancers.builder()
    .backendSetName(java.lang.String)
    .loadBalancerId(java.lang.String)
    .port(java.lang.Number)
    .vnicSelection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#backend_set_name CoreInstancePool#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#load_balancer_id CoreInstancePool#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#port CoreInstancePool#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.vnicSelection">vnicSelection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#vnic_selection CoreInstancePool#vnic_selection}. |

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#backend_set_name CoreInstancePool#backend_set_name}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#load_balancer_id CoreInstancePool#load_balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#port CoreInstancePool#port}.

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers.property.vnicSelection"></a>

```java
public java.lang.String getVnicSelection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#vnic_selection CoreInstancePool#vnic_selection}.

---

### CoreInstancePoolPlacementConfigurations <a name="CoreInstancePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurations;

CoreInstancePoolPlacementConfigurations.builder()
    .availabilityDomain(java.lang.String)
//  .faultDomains(java.util.List<java.lang.String>)
//  .primarySubnetId(java.lang.String)
//  .primaryVnicSubnets(CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets)
//  .secondaryVnicSubnets(IResolvable)
//  .secondaryVnicSubnets(java.util.List<CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#availability_domain CoreInstancePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#fault_domains CoreInstancePool#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.primarySubnetId">primarySubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#primary_subnet_id CoreInstancePool#primary_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a></code> | primary_vnic_subnets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>></code> | secondary_vnic_subnets block. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#availability_domain CoreInstancePool#availability_domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#fault_domains CoreInstancePool#fault_domains}.

---

##### `primarySubnetId`<sup>Optional</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.primarySubnetId"></a>

```java
public java.lang.String getPrimarySubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#primary_subnet_id CoreInstancePool#primary_subnet_id}.

---

##### `primaryVnicSubnets`<sup>Optional</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.primaryVnicSubnets"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets getPrimaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a>

primary_vnic_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#primary_vnic_subnets CoreInstancePool#primary_vnic_subnets}

---

##### `secondaryVnicSubnets`<sup>Optional</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations.property.secondaryVnicSubnets"></a>

```java
public java.lang.Object getSecondaryVnicSubnets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>>

secondary_vnic_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#secondary_vnic_subnets CoreInstancePool#secondary_vnic_subnets}

---

### CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets <a name="CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets;

CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.builder()
    .subnetId(java.lang.String)
//  .ipv6AddressIpv6SubnetCidrPairDetails(IResolvable)
//  .ipv6AddressIpv6SubnetCidrPairDetails(java.util.List<CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails>)
//  .isAssignIpv6Ip(java.lang.Boolean)
//  .isAssignIpv6Ip(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}.

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6address_ipv6subnet_cidr_pair_details CoreInstancePool#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `isAssignIpv6Ip`<sup>Optional</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets.property.isAssignIpv6Ip"></a>

```java
public java.lang.Object getIsAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}.

---

### CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
//  .ipv6SubnetCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}. |

---

##### `ipv6SubnetCidr`<sup>Optional</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}.

---

### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets;

CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.builder()
    .subnetId(java.lang.String)
//  .displayName(java.lang.String)
//  .ipv6AddressIpv6SubnetCidrPairDetails(IResolvable)
//  .ipv6AddressIpv6SubnetCidrPairDetails(java.util.List<CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails>)
//  .isAssignIpv6Ip(java.lang.Boolean)
//  .isAssignIpv6Ip(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}.

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6address_ipv6subnet_cidr_pair_details CoreInstancePool#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `isAssignIpv6Ip`<sup>Optional</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets.property.isAssignIpv6Ip"></a>

```java
public java.lang.Object getIsAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}.

---

### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
//  .ipv6SubnetCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}. |

---

##### `ipv6SubnetCidr`<sup>Optional</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}.

---

### CoreInstancePoolTimeouts <a name="CoreInstancePoolTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolTimeouts;

CoreInstancePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#create CoreInstancePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#delete CoreInstancePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#update CoreInstancePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#create CoreInstancePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#delete CoreInstancePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool#update CoreInstancePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstancePoolLoadBalancersList <a name="CoreInstancePoolLoadBalancersList" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolLoadBalancersList;

new CoreInstancePoolLoadBalancersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.get"></a>

```java
public CoreInstancePoolLoadBalancersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>>

---


### CoreInstancePoolLoadBalancersOutputReference <a name="CoreInstancePoolLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolLoadBalancersOutputReference;

new CoreInstancePoolLoadBalancersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.backendSetNameInput">backendSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.vnicSelectionInput">vnicSelectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.vnicSelection">vnicSelection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `backendSetNameInput`<sup>Optional</sup> <a name="backendSetNameInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.backendSetNameInput"></a>

```java
public java.lang.String getBackendSetNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `vnicSelectionInput`<sup>Optional</sup> <a name="vnicSelectionInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.vnicSelectionInput"></a>

```java
public java.lang.String getVnicSelectionInput();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.vnicSelection"></a>

```java
public java.lang.String getVnicSelection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolLoadBalancers">CoreInstancePoolLoadBalancers</a>

---


### CoreInstancePoolPlacementConfigurationsList <a name="CoreInstancePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsList;

new CoreInstancePoolPlacementConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.get"></a>

```java
public CoreInstancePoolPlacementConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>>

---


### CoreInstancePoolPlacementConfigurationsOutputReference <a name="CoreInstancePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsOutputReference;

new CoreInstancePoolPlacementConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putPrimaryVnicSubnets">putPrimaryVnicSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putSecondaryVnicSubnets">putSecondaryVnicSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetFaultDomains">resetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetPrimarySubnetId">resetPrimarySubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetPrimaryVnicSubnets">resetPrimaryVnicSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetSecondaryVnicSubnets">resetSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryVnicSubnets` <a name="putPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putPrimaryVnicSubnets"></a>

```java
public void putPrimaryVnicSubnets(CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putPrimaryVnicSubnets.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a>

---

##### `putSecondaryVnicSubnets` <a name="putSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putSecondaryVnicSubnets"></a>

```java
public void putSecondaryVnicSubnets(IResolvable OR java.util.List<CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.putSecondaryVnicSubnets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>>

---

##### `resetFaultDomains` <a name="resetFaultDomains" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetFaultDomains"></a>

```java
public void resetFaultDomains()
```

##### `resetPrimarySubnetId` <a name="resetPrimarySubnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetPrimarySubnetId"></a>

```java
public void resetPrimarySubnetId()
```

##### `resetPrimaryVnicSubnets` <a name="resetPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetPrimaryVnicSubnets"></a>

```java
public void resetPrimaryVnicSubnets()
```

##### `resetSecondaryVnicSubnets` <a name="resetSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.resetSecondaryVnicSubnets"></a>

```java
public void resetSecondaryVnicSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.faultDomainsInput">faultDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primarySubnetIdInput">primarySubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primaryVnicSubnetsInput">primaryVnicSubnetsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.secondaryVnicSubnetsInput">secondaryVnicSubnetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primarySubnetId">primarySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryVnicSubnets`<sup>Required</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primaryVnicSubnets"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference getPrimaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference</a>

---

##### `secondaryVnicSubnets`<sup>Required</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.secondaryVnicSubnets"></a>

```java
public CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList getSecondaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `faultDomainsInput`<sup>Optional</sup> <a name="faultDomainsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.faultDomainsInput"></a>

```java
public java.util.List<java.lang.String> getFaultDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primarySubnetIdInput`<sup>Optional</sup> <a name="primarySubnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primarySubnetIdInput"></a>

```java
public java.lang.String getPrimarySubnetIdInput();
```

- *Type:* java.lang.String

---

##### `primaryVnicSubnetsInput`<sup>Optional</sup> <a name="primaryVnicSubnetsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primaryVnicSubnetsInput"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets getPrimaryVnicSubnetsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a>

---

##### `secondaryVnicSubnetsInput`<sup>Optional</sup> <a name="secondaryVnicSubnetsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.secondaryVnicSubnetsInput"></a>

```java
public java.lang.Object getSecondaryVnicSubnetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primarySubnetId`<sup>Required</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.primarySubnetId"></a>

```java
public java.lang.String getPrimarySubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurations">CoreInstancePoolPlacementConfigurations</a>

---


### CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---


### CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">resetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6SubnetCidr` <a name="resetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```java
public void resetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6SubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidrInput`<sup>Optional</sup> <a name="ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```java
public java.lang.String getIpv6SubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference <a name="CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference;

new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">putIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">resetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resetIsAssignIpv6Ip">resetIsAssignIpv6Ip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv6AddressIpv6SubnetCidrPairDetails` <a name="putIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void putIpv6AddressIpv6SubnetCidrPairDetails(IResolvable OR java.util.List<CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `resetIpv6AddressIpv6SubnetCidrPairDetails` <a name="resetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void resetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `resetIsAssignIpv6Ip` <a name="resetIsAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resetIsAssignIpv6Ip"></a>

```java
public void resetIsAssignIpv6Ip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6IpInput">isAssignIpv6IpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `isAssignIpv6IpInput`<sup>Optional</sup> <a name="isAssignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6IpInput"></a>

```java
public java.lang.Object getIsAssignIpv6IpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public java.lang.Object getIsAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets">CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets</a>

---


### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---


### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">resetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6SubnetCidr` <a name="resetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```java
public void resetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6SubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidrInput`<sup>Optional</sup> <a name="ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```java
public java.lang.String getIpv6SubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList;

new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.get"></a>

```java
public CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>>

---


### CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference <a name="CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference;

new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">putIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">resetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetIsAssignIpv6Ip">resetIsAssignIpv6Ip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv6AddressIpv6SubnetCidrPairDetails` <a name="putIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void putIpv6AddressIpv6SubnetCidrPairDetails(IResolvable OR java.util.List<CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetIpv6AddressIpv6SubnetCidrPairDetails` <a name="resetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void resetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `resetIsAssignIpv6Ip` <a name="resetIsAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resetIsAssignIpv6Ip"></a>

```java
public void resetIsAssignIpv6Ip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6IpInput">isAssignIpv6IpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `isAssignIpv6IpInput`<sup>Optional</sup> <a name="isAssignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6IpInput"></a>

```java
public java.lang.Object getIsAssignIpv6IpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public java.lang.Object getIsAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets">CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets</a>

---


### CoreInstancePoolTimeoutsOutputReference <a name="CoreInstancePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool.CoreInstancePoolTimeoutsOutputReference;

new CoreInstancePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePool.CoreInstancePoolTimeouts">CoreInstancePoolTimeouts</a>

---



